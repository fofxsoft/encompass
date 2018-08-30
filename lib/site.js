load = function (url) {
	var request = null;

	return new monaco.Promise(function (complete, error, progress) {
		request = new XMLHttpRequest();

		request.onreadystatechange = function () {
			if (request._canceled) {
				return;
			}

			if (request.readyState === 4) {
				if ((request.status >= 200 && request.status < 300) || request.status === 1223) {
					complete(request.responseText);
				} else {
					error(request.statusText);
				}

				request.onreadystatechange = function () {};
			} else {
				progress(request);
			}
		};

		request.open("GET", url, true);
		request.responseType = "";

		request.send(null);
	}, function () {
		request._canceled = true;
		request.abort();
	});
};