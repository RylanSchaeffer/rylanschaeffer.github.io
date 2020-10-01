# Blog

{% for post in site.posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>

    <span class="post-date">{{ post.date | date: '%b %-d, %Y' }}</span>

    {{ post.excerpt }}
    {% if post.content contains site.excerpt_separator %}
      <a href="{{ site.baseurl }}{{ post.url }}">Read more</a>
    {% endif %}
  </div>
{% endfor %}