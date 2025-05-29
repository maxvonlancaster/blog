# Teamplate for html post

Below (copy): 

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
      </script>
      <script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
      </script>
    <link rel="stylesheet" href="../style.css">
    <link rel="shortcut icon" href="../images/logo.jpg" type="image/x-icon" />
    <title>Тестовий Пост</title>
    <meta name="description" content="A blog about solving math problems. Блог про математику, розв'язання олімпіадних задач з математики.">
    <meta name="keywords" content="math, complex numbers, algebra, educational blog, math problems, олімпіадні задачі, математика">
    <meta name="author" content="Василь Мельник">
    <meta property="og:title" content="Блог про математику">
    <meta property="og:description" content="Блог про математику, розв'язання олімпіадних задач з математики.">
    <meta property="og:url" content="https://maxvonlancaster.github.io/blog/index.html">
    <meta property="og:image" content="https://maxvonlancaster.github.io/blog/images/logo.jpg">
</head>

<body>
    <nav>
        <div class="navbar-content">
            <div class="nav-links">
                <div class="nav-link"><a href="../index.html">Головна</a></div>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="text-content">
            <h1>Тестовий Пост</h1>
            <div class="info">Це просто тестовий пост</div>

            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

            <br />
            <div class="problem">
                <div><i>Задача 1.</i> Обчисліть інтеграл \( \int x \sin x \, dx \)</div>
                <button onclick="toggleSolution(this)" class="dropdown-btn">Розв'язок ▾</button>
                <div class="solution">
                    <p>Using integration by parts:<br>
                        Let \( u = x \), \( dv = \sin x \, dx \).<br>
                        Then \( du = dx \), \( v = -\cos x \)<br>
                        So, \( \int x \sin x \, dx = -x \cos x + \int \cos x \, dx = -x \cos x + \sin x + C \).</p>
                </div>
            </div>

            <br />
            <div class="problem">
                <div><i>Задача 2.</i> Обчисліть інтеграл \( \int x \sin x \, dx \)</div>
                <button onclick="toggleSolution(this)" class="dropdown-btn">Розв'язок ▾</button>
                <div class="solution">
                    <p>Using integration by parts:<br>
                        Let \( u = x \), \( dv = \sin x \, dx \).<br>
                        Then \( du = dx \), \( v = -\cos x \)<br>
                        So, \( \int x \sin x \, dx = -x \cos x + \int \cos x \, dx = -x \cos x + \sin x + C \).</p>
                </div>
            </div>

            <section class="comment-section">
                <h3>Залиште коментарій</h3>
                <input type="text" id="nameInput" placeholder="Your name" required />
                <textarea id="commentInput" placeholder="Your comment" rows="4" required></textarea>
                <button id="submitButton" onclick="postComment()">Submit</button>
            
                <h3>Коментарії</h3>
                <div class="comments-display" id="commentsDisplay">
                    
                </div>
            </section>
        </div>
    </div>
</body>
<script>
    let category = "25-05-28-test.html";
    let solutionsEnabled = true;
</script>
<script src="../script.js"></script>
</html>

```