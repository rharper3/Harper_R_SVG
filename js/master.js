(() => { 
		


		// What do we want to work with
		
		// This is a one to one connection (selects one element) 
		var badge = document.querySelector ("#badge");

		// This is a one to many selecotin (gets collection of elements)
		var allTheBadges = document.querySelectorAll(".issaBadge")

		// What do we wamt it to do?
		function logMyId() {
			// log some stuff to the dev tools
			console.log(this.id);
			debugger;
		}

		// how do we want to do that?
		// This is a one to one
		badge.addEventListener("click", logMyId)

		allTheBadges.forEach(currentbadge => currentbadge.
			addEventListener("click", logMyId));
})();