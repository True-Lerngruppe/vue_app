<script lang="ts">
</script>

<template>
  <body>
    <div class="container">
      <h1>SVG to SVG Converter</h1>
      <div class="upload-section">
        <input type="file" accept=".svg" id="inputFile" onchange="handleFileSelect(event)">
        <div id="fileNameDisplay" class="file-name-display"></div>
      </div>
      <button id="convertButton" class="convert-btn" aria-label="Convert SVG" onclick="convertSvg()">
        <span class="btn-text">Convert</span>
      </button>
      <div id="outputContainer" class="output-container"></div>
    </div>
  </body>
</template>

<style scoped></style>
