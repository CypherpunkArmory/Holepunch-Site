import openSourceIcon from '../images/open-source-icon.svg';
import protectionIcon from '../images/protection-icon.svg';
import usabilityIcon from '../images/usability-icon.svg';

export default {
    head: 'Public URLs/IPs for exposing local servers.',
    subhead: "Expose local servers running behind any NAT or firewall.  This could be a web server, an FTP server, or even a game server.  You start it and we take care of the rest.",
    why: "Want security and privacy, then host the server yourself.  Want low cost, then host the server yourself.  Want maximum flexibility, then host the server yourself.  With our low cost, secure tunneling service, you won't run out or reasons or ways to use it.",
    howItWorks: "After signing up for our service, you simply download and use our intutative CLI to create a tunnel.  This makes a connection between your local server and our servers.  Our servers then expose your service at a public URL/IP.  You can choose a subdomain or have a random one assigned.",
    features: [
        {
            title: 'FOSS',
            description: 'Open source both on the client and the server.',
            icon: openSourceIcon
        },
        {
            title: 'Secure',
            description: 'Multiple architectural and implementation details that guard your use of our service.',
            icon: protectionIcon
        },
        {
            title: 'Easy',
            description: 'The entire service is intuitive to use and does what it is supposed to do.',
            icon: usabilityIcon
        }
    ]
}