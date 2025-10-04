        #!/bin/sh
        # Navigate to your repository directory
        cd D:\Code

        # Add all changes
        git add --all

        # Create a timestamp for the commit message
        timestamp() {
            date +"at %H:%M:%S on %d/%m/%Y"
        }

        # Commit and push
        git commit -m "Regular auto-commit $(timestamp)"
        git push origin master # Or your branch name