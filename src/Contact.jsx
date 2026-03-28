{
  "component_name": "ContactPage",
  "title": "Schedule a Discovery Call",
  "description": "We will assess your current operations, identify automation opportunities, and provide a customized proposal within 5 business days.",
  "contact_details": {
    "location": "West Ashley, Charleston, SC",
    "email": "oceantidedrop@gmail.com"
  },
  "form_config": {
    "fields": [
      {
        "id": "name",
        "type": "text",
        "placeholder": "Your Name",
        "required": true
      },
      {
        "id": "email",
        "type": "email",
        "placeholder": "Business Email",
        "required": true
      },
      {
        "id": "message",
        "type": "textarea",
        "placeholder": "Tell us about your current support volume...",
        "rows": 4
      }
    ],
    "submit_button_text": "Request Implementation Proposal",
    "target_endpoint": "/api/leads"
  },
  "visual_style": {
    "background": "bg-black",
    "accent_color": "teal-400",
    "container_padding": "py-20 px-6",
    "card_styling": "bg-gray-900/50 p-10 rounded-3xl border border-teal-900/50",
    "button_styling": "bg-teal-500 shadow-[0_0_20px_rgba(45,212,191,0.3)]"
  }
}