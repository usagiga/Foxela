function onSendForm(ev) {
  // Setting up here!
  const userName = "";
  const graphID = "";
  const accessToken = "";
  // ////////////////

  const readingInfo = getReadingInfo(ev);
  
  const reqBody = {
    "date": Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMdd'),
    "quantity": "1",
    "optionalData": JSON.stringify(readingInfo),
  };
  
  const opts = {
    "method": "post",
    "contentType": "applications/json",
    "headers": {
      "X-USER-TOKEN": accessToken,
    },
    "payload": JSON.stringify(reqBody),
  };
  
  UrlFetchApp.fetch(`https://pixe.la/v1/users/${userName}/graphs/${graphID}`, opts);
}

function getReadingInfo(ev) {
  let readingInfo = {};
  
  const items = ev.response.getItemResponses();
  items.forEach((itemRes) => {
                  const itemTitle = itemRes.getItem().getTitle();
                  const itemContent = itemRes.getResponse();
                  switch (itemTitle) {
                    case "$1":
                      readingInfo.description = itemContent;
                      break;
                    case "$2":
                      readingInfo.at = itemContent;
                      break;
                  }
                });
  
  return readingInfo;
}
