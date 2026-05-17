text = '''Current Affairs
Geography
Technology
History
Maths
Gaming
Sports
Physics/Space
Movies/TV
Travel/LifeStyle
Music
Social Media'''

categories = text.split("\n")
categories_str = [f'"{each}"' for each in categories]
print(",\n".join(categories_str))