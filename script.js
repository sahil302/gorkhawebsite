function checkPincode(event) {
    event.preventDefault();
    var pincode = document.getElementById('pincodeInput').value;
    var notification = document.getElementById('notification');
    if (pincode === '') {
      return;
    }
    if (pincode === '734301') {
      notification.textContent = 'Service available in Kalimpong';
      notification.className = 'notification show available';
    } else {
      notification.textContent = 'comming soon !!';
      notification.className = 'notification show not-available';
    }
    setTimeout(() => {
      notification.className = notification.className.replace('show', '');
    }, 3000);
  }