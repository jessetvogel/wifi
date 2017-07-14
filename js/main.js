var wifi = require('node-wifi');

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
    iface : null // network interface, choose a random wifi interface if set to null
});

// Scan networks
wifi.scan(function(err, networks) {
    if (err) {
        console.log(err);
    } else {
        

        wifi.scan(function(err, networks) {
            if (err) {
                console.log(err);
            } else {

                /*
                networks = [
                    {
                        ssid: '...',
                        mac: '...',
                        frequency: <number>, // in MHz
                        signal_level: <number>, // in dB
                        security: '...' // unfortunately the format still depends of the OS
                    },
                    ...
                ];
                */
            }
        });
    }
});

// Connect to a network
// wifi.connect({ ssid : "ssid", password : "password"}, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Connected');
// });

// Disconnect from a network
// not available on all os for now
// wifi.disconnect(function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Disconnected');
// });

// Disconnect from a network
// not available on all os for now
// wifi.getCurrentConnections(function(err, currentConnections) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(currentConnections);
//     /*
//     // you may have several connections
//     [
//         {
//             iface: '...', // network interface used for the connection, not available on macOS
//             ssid: '...',
//             mac: '...',
//             frequency: <number>, // in MHz
//             signal_level: <number>, // in dB
//             security: '...' // not available on linux
//         }
//     ]
//     */
// });
