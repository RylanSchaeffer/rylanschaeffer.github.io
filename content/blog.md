# Blog

{% for post in site.posts %}
  <div class="post">
        <a href="{{ post.url }}">{{ post.title }}</a>
        {{ post.date | date: '%b %-d, %Y' }}
        {{ post.excerpt }}
  </div>
{% endfor %}