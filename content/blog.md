# Blog


{% for post in site.blog_posts reversed %}
  <div class="post">
    <span class="post-title">
        {{ post.date | date: '%b %-d, %Y' }}
        <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
    </span>
  </div>
{% endfor %}
