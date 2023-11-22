document.addEventListener('DOMContentLoaded', function() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (userProfile) {
        const profileDiv = document.querySelector('.profile');
        
        // Create and populate profile content
        const profileContent = `
            <h2>โปรไฟล์สุขภาพ</h2>
            <p><strong>ชื่อจริง-นามสกุล:</strong> ${userProfile.name}</p>
            <p><strong>เพศ:</strong> ${userProfile.gender}</p>
            <p><strong>อายุ:</strong> ${userProfile.age}</p>
            <p><strong>เบอร์โทรศัพท์:</strong> ${userProfile.tel}</p>
            <p><strong>ส่วนสูง (ซม.):</strong> ${userProfile.height}</p>
            <p><strong>น้ำหนัก (กก.):</strong> ${userProfile.weight}</p>
            <p><strong>โรคประจำตัว:</strong> ${userProfile.disease}</p>
            <p><strong>กิจกรรมที่ชอบ:</strong> ${userProfile.activity}</p>
        `;

        profileDiv.innerHTML = profileContent;
    }
});