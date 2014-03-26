var Journal = {
	Tool: {
		name: 'Generic Tool',
		toolTip: 'Generic Tool Tooltip',
		description: 'Generic Tool Description'
	},
	
	Template: {
		name: '',
		tools: []
	},
	
	TemplateManagerTool: function() {
		return $.extend({}, Journal.Tool, {
			name: 'Template Creation Tool',
			toolTip: 'Create a worksheet template',
			description: 'This tool allows you to create a template'}, {
				open: function() {

				},
				close: function() {

				},
				create: function() {

				},
				save: function() {

				},
				copy: function() {

				},
				list: function() {
					
				}
		});
	},
	
	Worksheet: {
		name: '',
		template: '',
		isCompleted: false,
		startTime: '',
		endTime: ''
	},
	
	WorksheetManagerTool: function(config) {
		return $.extend({}, Journal.Tool, {
			name: 'Worksheet Management Tool',
			toolTip: 'Manage Worksheets',
			description: 'This tool allows you to manage worksheets'
		}, {
			open: function() {
				
			},
			close: function() {
				
			},
			create: function() {
				
			}
		});
	}
};

var ScheduledTask = function(config) {
	return $.extend({}, config);
};

var ScheduledTaskTool = function(config) {
	return $.extend({}, Journal.Tool, {
		name: 'Scheduled Task Tool',
		toolTip: 'Add a scheduled task',
		description: 'This tool allows you to define a task that can be executed at specified times',
		open: function() {
			
		},
		close: function() {
			
		},
		add: function() {
			
		},
		save: function() {
			
		},
		delete: function() {
			
		}
	})	
};

