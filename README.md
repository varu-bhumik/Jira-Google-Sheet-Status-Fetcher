# Jira-Google-Sheet-Status-Fetcher
This script fetches the status of all the tickets mention in google sheet column, and updates the sheet's column using the latest information and jira status


**Steps:** Get your jira access token from the below link
https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/

==> Click on your profile Icon
==> Navigate to security tab
==> Click on the "Create API token" Button
==> Add a label to "Create An API token" pop up.
==> Copy the new generated API token, and save it for the future use.


**Sample Google sheet for reference**

https://docs.google.com/spreadsheets/d/1qHoFNUQdOpKcavI4Fjggpk2afS6Y2qVvmg1rnkD4trs/edit#gid=0


**Parameters and parameter description for variables used in script**

**Parametes :   Values**

**jiraUsername**: Domain email Address

**jiraToken**: Token generated from the process above

**sheetURL**: https URL for the sheet

**sheetName**: Name of the tab in the sheet

**jeeraStatus**: Column for the Jeera Status

**jeeraAssignee**: Person name whom the ticket is on currently

**jeeraticketColumn**: The columns which contains the jeeraticket URL, or the XYZ-123


**Way to Navigate to AppScript**
Go to google sheets, in the "Extensions" button, click on App Script Navigation, and paste the code in "Automate.js" in the editor section on the App Script. Click Run to run the script.
