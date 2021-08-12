import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>IP Lookup Tool / VPN Privacy Check</h1>
      <h3>You're free to embed this tool into your app or website</h3>
      
      <iframe height="600" width=" 300"src="https://svpn.com" title="SVPN IP Lookup"></iframe>
    <div className="text">
      <h3>About the IP Lookup Tool</h3>
      <p>The tool returns detailed visitor information based on the connecting IP address,
        you're free to embed it into any project.</p>
        
        <p>Headers are explicitly set to <b>"X-Frame-Options": "ALLOW"</b> to allow 
         embedding into any app or website using an iframe or pointing to 
         <a href="https://svpn.com/" target="_blank" rel="noopener">https://svpn.com</a>
          inside a native Android or iOS app.</p>

        <p>Information is rendered safely on the server side to prevent tampering.</p>
          
          <p>The tool runs from 200+ edge locations, ensuring high-performance
          and low latency from anywhere in the world.</p>

        <p>No logs are kept and the tool is accessible via Tor and VPN services.</p>
        
        <h3>IP and ASN Links</h3>
        <p>The IP address link opens a new window to a blacklist lookup service,
          this is useful when testing VPN services and diagnosing issues.
        </p>
        <p>The Autonomous System Number (ASN) link opens a new window to an ASN
          lookup service.  This identifies the IP address network operator.
        </p>
        
        </div>
        </div>
        

  );
}
