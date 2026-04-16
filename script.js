// Existing GitHub Logo Logic
document.getElementById("github-logo").addEventListener("click", () => {
    window.open("https://github.com/Cubey-Studio-Community");
});

Prism.languages.cubeylang = {
    'comment': /\/\/.*/,
    'string': {
        pattern: /"(?:\\.|[^\\\"])*"/,
        greedy: true
    },
    // 1. KEYWORDS & TYPES: #ff60aa (Pink)
    'keyword': /\b(?:var|fun|subvar|impl|if|else|elseif|then|for|from|while|do|start|end|when|pub|priv|prot|class|enum|new|del|mod|require|use|module|as|extends|switch|case|default|break|continue|this|try|catch|static|in|with|match|of|out|exit|define|true|false|Number|Decimal|String|Function|Boolean|null|Number\?|Decimal\?|String\?|Function\?|Boolean\?)\b/,

    // 2. FUNCTIONS & CUSTOM FUNCTIONS: #FFFFAA (Yellow)
    // Matches any word immediately followed by '('
    'function': /\b[a-z_]\w*(?=\s*\()/i,

    // 3. METHODS: #FFFFAA (Yellow)
    // Matches :print
    'method': {
        pattern: /:[a-zA-Z_]\w*/,
        inside: { 'punctuation': /^:/ }
    },

    // 4. NAMESPACES & CLASSES: #50FFCC (Teal)
    'class-name': [
        // Content inside < >
        {
            pattern: /<[A-Za-z.]+>/,
            inside: {
                'punctuation': /[<>]/,
                'namespace-text': /[A-Za-z0-9_.]+/
            }
        },
        // Floating Namespaces (Capitalized words NOT followed by '(')
        /\b[A-Z]\w*\b(?!\s*\()/,
        // Word after class/enum/impl
        {
            pattern: /(?<=\b(?:class|enum|impl|extends|as)\s+)[A-Za-z0-9_]+/,
            lookbehind: true
        }
    ],

    // 5. VARIABLES: #007DFF (Blue)
    'variable': /\b[a-z_]\w*\b/i,

    'operator': /[<>!=\-+*/%&|]/,
    'punctuation': /[{}()\[\],.:]/ 
};

Prism.highlightAll();