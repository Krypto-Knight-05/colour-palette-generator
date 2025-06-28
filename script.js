body {
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  background: #f0f0f0;
  margin: 0;
  padding: 2rem;
}

.container {
  max-width: 700px;
  margin: auto;
}

.palette {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}

.color-box {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  position: relative;
}

.color-code {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  font-size: 14px;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 2px;
}
