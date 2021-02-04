# Blog

{% for post in site.blog_posts %}
  <div class="post">
    <span class="post-title">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </span><br>
    <span class="post-date">
      {{ post.date | date: '%b %-d, %Y' }}
    </span>
    {{ post.excerpt }}...

  </div>
{% endfor %}