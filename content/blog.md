# Blog

{% for post in site.posts %}
  <div class="post">
    <h2 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }} {{ post.date | date: '%b %-d, %Y' }}
      </a>
    </h2>

  </div>
{% endfor %}