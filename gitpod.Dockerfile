FROM gitpod/workspace-full

# Install Platform.sh CLI
RUN curl -fsSL https://raw.githubusercontent.com/platformsh/cli/main/installer.sh | bash
