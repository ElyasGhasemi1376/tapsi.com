const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // Remove previous active classes
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabContents.forEach((tabContent) => tabContent.classList.remove('active'));

    // Add new active classes
    tab.classList.add('active');
    targeTabContent.classList.add('active');
    });
});
