import os
import glob

directory = r"C:\Users\user\Desktop\جمعية شباب البان"
html_files = glob.glob(os.path.join(directory, "*.html"))

emoji_map = {
    '🌱': '<i data-lucide="leaf"></i>',
    '🤝': '<i data-lucide="handshake"></i>',
    '🎓': '<i data-lucide="graduation-cap"></i>',
    '🌿': '<i data-lucide="tree-pine"></i>',
    '💪': '<i data-lucide="zap"></i>',
    '❤️': '<i data-lucide="heart"></i>',
    '🏅': '<i data-lucide="medal"></i>',
    '🌍': '<i data-lucide="globe"></i>',
    '✨': '<i data-lucide="sparkles"></i>',
    '✦': '<i data-lucide="check-circle-2"></i>',
    '🏘️': '<i data-lucide="home"></i>',
    '💚': '<i data-lucide="heart"></i>',
    '⚽': '<i data-lucide="trophy"></i>',
    '💡': '<i data-lucide="lightbulb"></i>',
    '🙋': '<i data-lucide="user-plus"></i>',
    '🪪': '<i data-lucide="contact"></i>',
    '💛': '<i data-lucide="heart"></i>',
    '📘': '<i data-lucide="facebook"></i>',
    '📸': '<i data-lucide="instagram"></i>',
    '▶️': '<i data-lucide="youtube"></i>',
    '💬': '<i data-lucide="message-circle"></i>',
    '📍': '<i data-lucide="map-pin"></i>',
    '📞': '<i data-lucide="phone"></i>',
    '✉️': '<i data-lucide="mail"></i>',
    '🎯': '<i data-lucide="target"></i>',
    '🚀': '<i data-lucide="rocket"></i>',
    '📚': '<i data-lucide="book-open"></i>',
    '🌳': '<i data-lucide="tree-deciduous"></i>',
    '🎒': '<i data-lucide="backpack"></i>',
    '🩺': '<i data-lucide="stethoscope"></i>',
    '🗺️': '<i data-lucide="map"></i>'
}

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for emoji, icon in emoji_map.items():
        content = content.replace(emoji, icon)
        
    # Inject lucide script before closing body
    if '<script src="https://unpkg.com/lucide@latest"></script>' not in content:
        content = content.replace('</body>', '  <script src="https://unpkg.com/lucide@latest"></script>\n</body>')
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update main.js to call lucide.createIcons();
js_path = os.path.join(directory, "main.js")
with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

if 'lucide.createIcons()' not in js_content:
    js_content += "\n  /* ── Lucide Icons Init ── */\n  if (typeof lucide !== 'undefined') {\n    lucide.createIcons();\n  }\n"
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
