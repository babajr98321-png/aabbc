
import re

def check_balance(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    # Remove comments
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    
    # Find all tags
    tags = re.findall(r'<(/?\w+)', content)
    
    stack = []
    imbalance = []
    
    for tag in tags:
        if tag.startswith('/'):
            t = tag[1:].lower()
            if stack and stack[-1] == t:
                stack.pop()
            else:
                imbalance.append(f"Extra closing tag: </{t}>")
        else:
            t = tag.lower()
            if t not in ['img', 'br', 'hr', 'input', 'link', 'meta', 'base', 'col', 'embed', 'area', 'param', 'source', 'track', 'wbr']:
                stack.append(t)
    
    for t in stack:
        imbalance.append(f"Unclosed tag: <{t}>")
    
    return imbalance

if __name__ == "__main__":
    errors = check_balance('/Users/yoni/Desktop/sdfkjakjssakj-f72530222bdc14b18cee6cfb2e428d7b7de8f82b/index.html')
    for e in errors:
        print(e)
