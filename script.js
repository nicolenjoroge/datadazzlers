function toggleActive(element) {
    var links = document.querySelectorAll('.sidebar-menu a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    element.classList.add('active');
  }
  // Toggle dropdown menu
  function toggleDropdown(id) {
    var dropdownMenu = document.getElementById(id);
    dropdownMenu.classList.toggle('active');
  }

  function toggleVisibility(content) {
    var sessionListTable = document.getElementById('sessionListTable');
    var addSessionForm = document.getElementById('addSessionForm');
    
    if (content === 'sessionList') {
      sessionListTable.classList.toggle('visible');
      addSessionForm.classList.remove('visible');
    } else if (content === 'addSession') {
      addSessionForm.classList.toggle('visible');
      sessionListTable.classList.remove('visible');
    }
  }

  function toggleManageMarks(button) {
    var manageMarksTable = document.getElementById('manageMarksTable');
    manageMarksTable.style.display = 'block';
    // Scroll to the manage marks table
    manageMarksTable.scrollIntoView();
  }