# Blog

{% for post in site.collections.blog_posts %}
  <div class="post">
    <span class="post-title">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </span><br>
    <span class="post-date">
      {{ post.date | date: '%b %-d, %Y' }}
    </span>
    {{ post.excerpt }}

  </div>
{% endfor %}