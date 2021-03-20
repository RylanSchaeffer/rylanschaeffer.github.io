# Kernel Papers

The following are succinct summaries (i.e. the kernels) of others' 
research. These are not complete depictions; I focus on what I find
insightful or interesting.

{% for post in site.kernel_papers reversed %}
  <div class="post">
    <span class="post-title">
        {{ post.author }}
        <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
    </span>
  </div>
{% endfor %}