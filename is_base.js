// div toggle
function show_hide_div(id) {
		 var obj = document.getElementById(id);
		 if (obj.style.display=='')
			obj.style.display = 'none';
		 else
			obj.style.display = '';
}

// add comma
function addCommas(strValue){
	var objRegExp = new RegExp('(-?[0-9]+)([0-9]{3})');
	  while(objRegExp.test(strValue)) {
	  strValue = strValue.replace(objRegExp, '$1,$2');
	  }
	return strValue;
}

// link_icon
function is_LinkIcon(strValue){
	   var iconStr;
	   var arrayStr = strValue.split(":");
	   if (arrayStr.length>1)
		   iconStr = "<img style='margin-top:2px;margin-bottom:2px;' src='"+is_skinURL+"/images/is_link_"+arrayStr[0]+".gif' align='absmiddle'> "+arrayStr[1];
	   else
		   iconStr = strValue;
	   document.write (iconStr);
}

// init side item detail
function init_side_detail() {
		if ( document.getElementById('cat_div') ) document.getElementById('cat_div').style.display=f_cat_div?'':'none';
		if ( document.getElementById('as_div') ) document.getElementById('as_div').style.display=f_as_div?'':'none';
		if ( document.getElementById('rct_article_div') ) document.getElementById('rct_article_div').style.display=f_rct_article_div?'':'none';
		if ( document.getElementById('calendar_box') ) document.getElementById('calendar_box').style.display=f_calendar_box?'':'none';
		if ( document.getElementById('rct_comment_div') ) document.getElementById('rct_comment_div').style.display=f_rct_comment_div?'':'none';
		if ( document.getElementById('rct_tb_div') ) document.getElementById('rct_tb_div').style.display=f_rct_tb_div?'':'none';
		if ( document.getElementById('link_div') ) document.getElementById('link_div').style.display=f_link_div?'':'none';
		if ( document.getElementById('cnt_div') ) document.getElementById('cnt_div').style.display=f_cnt_div?'':'none';
}

// onclick event (ie)
function bluring(){
		if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus();
}
document.onfocusin=bluring;