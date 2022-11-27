import '../App.css';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './ConnectionStatus';
import Publisher from './Publisher';
import Subscriber from './Subscriber';
import React from 'react';
import FetchTest from "./FetchTest";


class SessionRoom extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               error: null,
               connected: false
          };
          this.sessionEvents = {
               sessionConnected: () => {
                    this.setState({ connected: true });
               },
               sessionDisconnected: () => {
                    this.setState({connected: false});
               }
          }
     };

     onError = (err) => {
          this.setState({ error: `FAiled to connect: ${err.message}` });
     }



     render() {
          return (
              <div>
              <OTSession
              apiKey={this.props.apiKey}
              sessionId={this.props.sessionId}
              token={this.props.token}
              eventHandlers={this.sessionEvents}
              onError={this.onError}
              >
                   {this.state.error ? <div id="error">{this.state.error}</div> : null}
                   <ConnectionStatus connected={this.state.connected}/>
                   <Publisher />
                   <OTStreams>
                        <Subscriber />
                   </OTStreams>
              </OTSession>
                   <FetchTest />
              </div>
          )
     }
}



//         const apiKey = '47570931'
//     const sessionId = '637df804e26b434cda5b5efb'
//     const token = 'T1==cGFydG5lcl9pZD00NzU3MDkzMSZzaWc9ZTBkY2JhNTNhZTQyOTBhNDk4MDlmOTU1MGQzMGNjYzhkNjUyYTUxODpzZXNzaW9uX2lkPTJfTVg0ME56VTNNRGt6TVg1LU1UWTJPVEU1T1RnM056VXdOMzUwWmtSTmNUWkZNRFpSSzJwNVRUUTFNMlJTU25sdmFrUi1VSDQmY3JlYXRlX3RpbWU9MTY2OTI3MTY2OSZub25jZT0wLjEyMzIxMzE2MzEyNDI5MTY1JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2NjkzNTgwNjkmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0='
//
//
//     // Handling all of our errors here by alerting them
//     function handleError(error) {
//         if(error) {
//             alert(error.message);
//         }
//     }
//
//     function initializeSession() {
//         const session = OT.initSession(apiKey, sessionId);
//
//         // Subscribe to a newly created stream
//
//         session.on('streamCreated', function(event) {
//             session.subscribe(event.stream, 'subscriber', {
//                 insertMode: 'append',
//                 width: '100%',
//                 height: '100%'
//             }, handleError);
//         });
//
//         // Create a publisher
//
//         const publisher = OT.initPublisher('publisher', {
//             insertMode: 'append',
//             width: '100%',
//             height: '100%'
//         }, handleError);
//
//         session.connect(token, function (error) {
//             // If the connection is successful, publish to the session
//             if (error) {
//                 handleError(error);
//             } else {
//                 session.publish(publisher, handleError);
//             }
//         });
//     }
//
//     return (<div>
//         <Helmet>
//             <script src="https://static.opentok.com/v2/js/opentok.min.js" />
//         </Helmet>
//         <script type="text/javascript" src="js/app.js"></script>
//               <div id="videos">
//             <div id="subscriber"></div>
//              <div id="publisher"></div>
//              </div>
//         {/*<ScriptTag type="text/javascript" src="https://static.opentok.com/v2/js/opentok.min.js"/>*/}
// test
//     </div>)
// }
//
// // function App() {
// //     console.log(test)
//
// //
// //
// //   return (
// //     <div className="App">
// //         dsfdsfsd
// //       {/*  <button>Start session</button>*/}
// //       {/*<div id="videos">*/}
// //       {/*  <div id="subscriber"></div>*/}
// //       {/*  <div id="publisher"></div>*/}
// //       {/*</div>*/}
// //     </div>
// //   );
// }


export default preloadScript(SessionRoom);
