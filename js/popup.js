// 打开后台页
$('#open_background').click(e => {
	window.open(chrome.extension.getURL('background.html'));
});