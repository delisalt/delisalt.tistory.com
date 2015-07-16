$( document ).ready(function(){

	//navigation bar
	$('#category_view').prepend('<li><a href="/category">' + $('#category-list').children().children().children().html() + '</a></li>');
	$('#category_view').append($('#category-list').children().children().children().next().html());
	
	var temp = $('.tt_menubar_logout').html();
	var url = location.href;
	if( temp.search('tistory.com/login') == -1){ //log-in
		var a = $('.tt_menubar_link');
		$('#ttoolbar_view').append('<li>' + $('.tt_menubar_logout').html() + '</li>');
		$('#ttoolbar_view').prepend('<li><a title="add blog to Link" class="tt_add_link" href="/toolbar/popup/link/"><span class="glyphicon glyphicon-link"></span></a></li>');

		temp = $('.tt_menubar_box_btn').html();
		if( temp.search('http://delisalt.tistory.com/admin/') != -1){
			$('#ttoolbar_view').prepend('<li><a title="admin acount" href="http://delisalt.tistory.com/admin/"><span class="glyphicon glyphicon-user"></span></a></li>');
			$('#ttoolbar_view').prepend('<li><a title="new post" href="http://delisalt.tistory.com/admin/entry/post/"><span class="glyphicon glyphicon-plus"></span></a></li>');
		}
	}else{ //log-out
		$('#ttoolbar_view').append('<li><a href="https://www.tistory.com/login">Log in</a></li>');
	}

	//fill title
	if(url.indexOf('delisalt.tistory.com/search') != -1 || url.indexOf('delisalt.tistory.com/tag/') != -1){
		//search list
		$('#article_category').html('&nbsp&nbsp<span class="glyphicon glyphicon-search ft-size-15"></span>');
		$('#article_category').prepend($('#search_word').text());
		$('#article_title').text('글 검색 결과');
		$('#article_date').append('총 ' + $('#search_count').text() + '개');
	}else if(url.indexOf('delisalt.tistory.com/tag') != -1){
		//tag list
		$('#article_category').html('');
		$('#article_title').text('꼬리표tag 목록');
	}else if(url.indexOf('delisalt.tistory.com/guestbook') != -1 || url.indexOf('delisalt.tistory.com/guestbook/') != -1){
		//guestbook
		$('#article_category').html('');
		$('#article_title').text('오고간 흔적들');
	}else if(url.indexOf('delisalt.tistory.com/category') != -1 || url.indexOf('delisalt.tistory.com/category/') != -1){
		//category
		$('#article_category').prepend($('#search_word').text());
		$('#article_title').text('분류별 검색 결과');
		$('#article_date').append('총 ' + $('#search_count').text() + '개');
	}else{
		//article info
		$('#article_title').append($('#article_title_dummy').html());
		$('#article_category').append($('#article_category_dummy').html());
		$('#article_date').append($('#article_date_dummy').html());
		
		if(typeof $('#article_title_dummy').html() == 'undefined'){ //s_article case.
			$('#article_title').append($('#s_article_title_dummy').html());
			$('#article_date').append($('#s_article_date_dummy').html());
			$('#article_category').html('<span class="glyphicon glyphicon-lock"></span>');
		}
	}
});