import './Servers.css';

function Servers(props) {
    let servers = [...Array(parseInt(props.amount))].map((e, i) => <div className="Server" key={i}>{i + 1}</div>);

    console.log(servers);
    console.log(props);

    return (<div class="Server-container">{servers}</div>);
}

export default Servers;
