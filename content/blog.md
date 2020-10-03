# Blog

{% for post in site.posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
      <span class="post-date">
          {{ post.date | date: '%b %-d, %Y' }}
      </span>
    </h1>

  </div>
{% endfor %}