# Blog

{% for post in site.posts %}
  <div class="post">
    <span class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </span>
    <span class="post-date">
      {{ post.date | date: '%b %-d, %Y' }}
    </span>

  </div>
{% endfor %}