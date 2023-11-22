document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const user = {
        name: formData.get('name'),
        gender: formData.get('gender'),
        age: formData.get('age'),
        tel: formData.get('tel'),
        height: formData.get('height'),
        weight: formData.get('weight'),
        disease: formData.get('disease'),
        activity: formData.get('activity')
    };

    localStorage.setItem('userProfile', JSON.stringify(user));
    window.location.href = 'profile.html';
});