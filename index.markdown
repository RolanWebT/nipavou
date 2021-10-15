---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: my_layout
title: Home page
my_number: 5
---
<h1>{{ "Hello World! downcase" | downcase }}</h1>
    {{ "hi capitalize" | capitalize }}

<p> This page is with the Title: <code>{{page.title}}</code> </p>
<p> number: <code>{{page.my_number}} </code> </p>