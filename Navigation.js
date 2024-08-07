console.log(navigator.timeline);

var hrs = -(new Date().getTimezoneOffset()/ 60);
console.log(hrs);   

var split = new Date().toString().split(" ");
var timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];

console.log(split);
console.log(split.toString().slice(17, 24));
console.log(timeZoneFormatted);

function getTimeZone() {
    var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}



const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
	const navigatorInfo = `
		<p>Browser Name: ${navigator.appName}</p>
		<p>Browser Version: ${navigator.appVersion}</p>
		<p>Device Platform: ${navigator.platform}</p>
		<p>Language: ${navigator.language}</p>
		<p>Timezone: ${Intl.DateTimeFormat().format()}</p>
		<p>Online: ${navigator.onLine}</p>
        <p>Platform: ${navigator.platform}</p>
		<p>Touch Support: ${navigator.maxTouchPoints}</p>
	`;

	output.innerHTML = navigatorInfo;
});
