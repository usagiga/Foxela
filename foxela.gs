function onSendForm(ev) {
  // Setting up here!
  const userName = "";
  const graphID = "";
  const accessToken = "";
  // ////////////////
  
  const opts = {
    "method": "put",
    "headers": {
      "X-USER-TOKEN": accessToken,
    },
  };
  
  UrlFetchApp.fetch(`https://pixe.la/v1/users/${userName}/graphs/${graphID}/increment`, opts);
}
