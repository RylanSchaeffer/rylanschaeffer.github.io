# Summaries of Others' Research

{% for post in site.others_research reversed %}
  <div class="post">
    <span class="post-title">
      <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
        {{ post.author }}
    </span><br>
    {{ post.excerpt }}
  </div>
{% endfor %}