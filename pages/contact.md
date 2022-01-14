---
layout: page
title: Contact
permalink: "/contact/"
comments: false
---



<!-- Wrapper container -->
<p class="mb-4">Thank you for your interest in getting in touch with us. Please send your message here. We will reply as soon as possible!</p>
  <!-- Bootstrap 5 starter form -->
  <form id="contactForm" action="https://formspree.io/{{site.formspree}}" method="POST">

    <!-- Name input -->
    <div class="mb-3">
      <label class="form-label" for="name">Name</label>
      <input class="form-control" name="name"  id="name" type="text" placeholder="Name" required>
    </div>

    <!-- Email address input -->
    <div class="mb-3">
      <label class="form-label" for="emailAddress">Email Address</label>
      <input class="form-control" id="emailAddress" type="email" name="_replyto" placeholder="Email Address" required>
    </div>

    <!-- Message input -->
    <div class="mb-3">
      <label class="form-label" for="message">Message</label>
      <textarea class="form-control" id="message" type="text" name="message" placeholder="Message" style="height: 10rem;" required></textarea>
    </div>

    <!-- Form submit button -->
    <div class="d-grid">
      <button class="btn btn-primary btn-lg" type="submit" value="Send">Submit</button>
    </div>

  </form>
