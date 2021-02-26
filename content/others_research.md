# Summaries of Others' Research

{% for post in site.others_research reversed %}
  <div class="post">
    <span class="post-title">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <h3>{{ post.author }}</h3>
    </span><br>
    {{ post.excerpt }}
  </div>
{% endfor %}