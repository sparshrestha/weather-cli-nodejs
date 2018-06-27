weather nodejs app built using minimist in command line terminal

Key points for any CLI based nodejs app:

=> Bin files are the entry point for any CLI app, and should only invoke the main function.
=> Command files shouldn't be required until they are needed.
=> Always include help and version commands.
=> Keep command files small. Their main purpose is to call functions and show user messages.
=> Always show some kind of activity indicator (loading).
=> Exit with the correct error codes.