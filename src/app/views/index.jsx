import React from 'react';

export default class Layout extends React.Component {

  render () {
    let contentHtml = this.props.data;
    let clientsource = this.props.client;
    return (
      <html>
        <head>
          <title>My App</title>
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: contentHtml}}/>
          <script src={clientsource}/>
        </body>
      </html>
    );
  }
};
