function findWordLadder(startWord, endWord, wordList) {
  const visited = new Set();
  const queue = [[startWord]];
  
  while (queue.length > 0) {
    const currentPath = queue.shift();
    const currentWord = currentPath[currentPath.length - 1];
    
    if (currentWord === endWord) {
      return currentPath;
    }
    
    visited.add(currentWord);
    
    for (const word of wordList) {
      if (!visited.has(word) && isOneLetterApart(currentWord, word)) {
        const newPath = [...currentPath, word];
        queue.push(newPath);
      }
    }
  }
  
  return [];
}

function isOneLetterApart(word1, word2) {
  if (word1.length !== word2.length) return false;
  
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      diffCount++;
      if (diffCount > 1) return false;
    }
  }
  
  return true;
}

document.getElementById('solveButton').addEventListener('click', function() {
  const startWord = document.getElementById('startWord').value.trim();
  const endWord = document.getElementById('endWord').value.trim();
  
  if (!startWord || !endWord) {
    document.getElementById('output').innerText = 'Please enter both start and end words.';
    return;
  }
  
  // Simulated word list
  const wordList = ['cat', 'cot', 'bat', 'bit', 'bot', 'but', 'cut'];
  
  const ladder = findWordLadder(startWord, endWord, wordList);
  if (ladder.length === 0) {
    document.getElementById('output').innerText = 'No ladder found between these words.';
  } else {
    document.getElementById('output').innerText = 'Word ladder: ' + ladder.join(' -> ');
  }
});
