## spfx-react-notifications
This extension is an individually packaged extension from the SharePoint Starter Kit provided by the Community. You can find more information about them here.
https://github.com/SharePoint/sp-starter-kit

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp clean
gulp build
gulp bundle --ship
gulp package-solution --ship
```
Copy across the spfx-react-notifications.sppkg in the SharePoint\solution folder to your App Catalog and deploy the package.
Before you add the app to your Hub site, you need to create the site columns, content type and list associated with this extension. I don't have a script that does this, but here are the steps:

1. Create the following site columns:
  * PnPAlertStartDateTime - Date time column, Default to Today, Group="PnP Columns"
  * PnPAlertMoreInformation - Hyperlink column, Group="PnP Columns"
  * PnPAlertMessage - Multitext column, Plain text, Group="PnP Columns"
  * PnPAlertType - Choice column, Group="PnP Columns", Options are Information and Urgent. You can default to Information.
  * PnPAlertEndDateTime - Date time column, Default to Today, Group="PnP Columns"
  
  After you create the columns, I renamed them to:
  * Start date-time
  * More information link
  * Alert message
  * Alert type
  * End date-time

2. Create the content type for the alert:
  PnPAlert, Item content type, with all the fields above as required.

3. Create a custom list "Alerts", with the Alert content type. You can reorder the columns so they make logical sense. I recommend
* Title
* Alert Type
* Alert Message
* Start date-time
* End date-time
* More information

Add the app to your HUB site (it only works on Hub sites). You can find instructions on Microsoft's support pages here.
https://docs.microsoft.com/en-us/powershell/module/sharepoint-online/register-spohubsite?view=sharepoint-ps

### Build options

gulp test - TODO
gulp serve - TODO

Finally
I want to iterate, this isn't source code, I am not the author of this code. It was used from the PnP-Starter-Kit in the SharePoint repo. I may update this code as needed, and it should only be deployed into test tenants. This is just the alerts extension from the solution.
