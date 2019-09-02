'use strict';

let scp_list = [];
let listshow = 0;

function new_scp() {
	// Call back end
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let i;
			document.getElementById("prev_ideas").innerHTML = '';
			for (i= 0; i < scp_list.length; i++) {
				let textNode = document.createTextNode(scp_list[i]);
				let node = document.createElement("p");
				node.appendChild(textNode);
				document.getElementById("prev_ideas").appendChild(node);
			}
			
			if (listshow)
				document.getElementById("list_container").style.display = "block";
			listshow = 1;

			let idea = this.responseText;

			document.getElementById('scp_idea').innerHTML = idea;
			scp_list.unshift(idea);
			if (scp_list.length > 16)
				scp_list.pop();
		}
	}
	xhttp.open('GET', '/newscp', true);
	xhttp.send();
}

new_scp();
document.getElementById("prev_ideas").innerHTML = '';
document.getElementById("list_container").style.display = "none";