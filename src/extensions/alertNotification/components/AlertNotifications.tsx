import * as React from 'react';
import { IAlertNotificationsProps } from '.';
import * as strings from 'AlertNotificationApplicationCustomizerStrings';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { AlertType } from '../IAlert';

export class AlertNotifications extends React.Component<IAlertNotificationsProps, {}> {
  public render(): React.ReactElement<IAlertNotificationsProps> {
    return (
      <div>
        {this.props.alerts.map(alert => <MessageBar
          messageBarType={alert.type === AlertType.Urgent ? MessageBarType.severeWarning : MessageBarType.warning}
          isMultiline={false}
        >{alert.message} {alert.moreInformationUrl ? <a href={alert.moreInformationUrl} target={"newtab"}>{strings.MoreInformation}</a> : ''}</MessageBar>)}
      </div>
    );
  }
}
