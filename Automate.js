var jiraUsername = 'bhumik.user@gmail.com';
var jiraToken = ""; // Replace with your Jira API token
var sheetURL = ""; // Replace with your sheet URL
var sheetName = "";// Replace the tab name in the google sheet
var jeeraStatus = "L"
var jeeraAssignee = "K"
var jeeraticketColumn = "G"
function fetchJiraTicketStatus() {
  var jiraDomain = 'xyzabc.atlassian.net'; // replace your jira domain here

  var sheet = SpreadsheetApp.openByUrl(sheetURL).getSheetByName(sheetName);


  
  var row = 1; // Starting row to fetch ticket data
  Logger.log(sheet.getLastRow());

    for(;row<sheet.getLastRow();row++){

    var issueKey = sheet.getRange(jeeraticketColumn + row).getValue(); 
    var apiUrl = ""
    if( issueKey[0]=== "X") // your ticket prefix eg. XYZ-123
    {apiUrl = 'https://' + jiraDomain + '/rest/api/latest/issue/' + issueKey;
    }
    else if(issueKey.split("/")[4] != null && issueKey.split("/")[4][0]==="X") // your ticket prefix e.g. XYZ-123
    {
   apiUrl = 'https://' + jiraDomain + '/rest/api/latest/issue/' + issueKey.split("/")[4];
    }
    else{
      
    }
    if(apiUrl!="" && apiUrl.split("/")[4]==="api")
    {
      apiUrl = apiUrl.substring(0,62)
   Logger.log("apiURL"+apiUrl.substring(0,62))
 var response = UrlFetchApp.fetch(apiUrl, {
      headers: {
        Authorization: 'Basic ' + Utilities.base64Encode(jiraUsername + ':' + jiraToken)
      }
    });
    var issueData = JSON.parse(response.getContentText());
    var status = issueData.fields.status.name;
    Logger.log(status)
    sheet.getRange(jeeraStatus + row).setValue(status);
    sheet.getRange(jeeraAssignee+row).setValue(issueData.fields.assignee.displayName) 

    }

}}  

