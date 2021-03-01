# Summaries of Others' Research

{% for post in site.others_research reversed %}
  <div class="post">
    <span class="post-title">
        {{ post.author }}
        <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
    </span>
  </div>
{% endfor %}