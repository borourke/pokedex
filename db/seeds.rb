template = Template.create(job_id: 847455, title: "Super Cool Job Template", author: "borourke@crowdflower.com", summary: "This is a super cool job template for Brian Hazell", description: "This is a super cool job template.  It does super cool things.  Things so cool I'd be surprised if you have ever heard of them before.  You probably haven't, so let's just assume you're not as cool as this job template.", rating: 4, image_url: "http://24.media.tumblr.com/tumblr_m31lobA6Lp1r3is9so1_500.jpg")

Review.create(template_id: template.id, review: "Wow this template is so cool.  It's probalby the coolest template I've ever seen.  If there was a cooler template it would be an already completed job with 100% accuracy.", reviewer: "bbeck@crowdflower.com", rating: 5)

Review.create(template_id: template.id, review: "What's up with this job?  It's pretty cool", reviewer: "sydney@crowdflower.com", rating: 4)

Review.create(template_id: template.id, review: "Is it just me or does Brian smell funny?", reviewer: "romeo@crowdflower.com", rating: 3)

Tag.create(template_id: template.id, tag: "Text Annotation")
Tag.create(template_id: template.id, tag: "NLP")
Tag.create(template_id: template.id, tag: "Text Highlighting")

template2 = Template.create(job_id: 847410, title: "Whatevs Kinda Template", author: "kirsten@crowdflower.com", summary: "This template is kinda whatevs if you ask me.", description: "This is a super cool job template.  It does super cool things.  Things so cool I'd be surprised if you have ever heard of them before.  You probably haven't, so let's just assume you're not as cool as this job template.", rating: 3, image_url: "http://24.media.tumblr.com/tumblr_m31lobA6Lp1r3is9so1_500.jpg")


