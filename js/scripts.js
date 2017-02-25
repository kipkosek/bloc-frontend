var data = [{	student_name: 'Sanny Lin',
				profile_photo: 'assets/images/0.jpg',
				subject: 'Frontend Foundation 6 - HTML & CSS: Basic Structure discussion',
				message: 'Ah... so it all depends on what the method is returning. And I realized that join() doesn\'t change the array, I would need to save it as a string.',
				age: '12 Oct'
			},
			{	student_name: 'Joey Kirk',
				profile_photo: 'assets/images/1.jpg',
				subject: 'true and false in JavaScript',
				message: 'Here\'s a good article covering truthy and falsey values in JavaScript',
				age: '5d'
			},
			{	student_name: 'Sanny Lin',
				profile_photo: 'assets/images/0.jpg',
				subject: 'Frontend Foundation 4 - GitHub',
				message: 'Updated Submission',
				age: '3d'
			},
			{
				student_name: 'Courtland Alves',
				profile_photo: 'assets/images/2.jpg',
				subject: 'Introducing myself',
				message: 'Hi mentor! I just enrolled in Bloc. I can\'t wait to start learning design and frontend.',
				age: '2h'
			}];




var createMessageRow = function(photo, name, subject, body, age) {
	var template =
		'<tr class="message-item">'
		+	'<td class="message-photo">' + '<img class="photo" src="' + photo + '" height="36" width="36"/>' + '</td>'
		+	'<td class="message-sender">' + name + '</td>'
		+	'<td class="message-container">' + '<div class="subject">' + subject + '</div>' +   '<div class="body">' + body + '</div></td>'
		+	'<td class="message-age">' + age + '</td>'
        +   '<td class="message-dismiss">x</td>'
		+   '</tr>'
        ;
    
        return template;
};

var createMessageList = function(data) {
    var $messageTable = $("#message-table");
    
	for (var i = 0; i < data.length; i++) {
        $messageTable.append(createMessageRow(data[i].profile_photo, data[i].student_name, data[i].subject, data[i].message, data[i].age));
	}
};

window.onload = function() {
    createMessageList(data);
};
